module "references_secrets" {
  source       = "modules/service-secrets"
  project_name = "taskcluster-references"

  secrets = {
    APPLICATION_NAME = "bstack-cluster"
  }
}

module "references_ui" {
  source         = "modules/static-service"
  project_name   = "taskcluster-references"
  service_name   = "references"
  secret_name    = "taskcluster-references"
  root_url       = "${var.root_url}"
  secret_keys    = "${module.references_secrets.env_var_keys}"
  docker_image   = "${local.taskcluster_image_references}"
  readiness_path = "/references/"
}
