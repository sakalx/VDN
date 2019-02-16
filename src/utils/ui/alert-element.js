export function getNotificationNode(target) {
  return target.closest('.alert');
}

export function removeClassAlertSelected(element) {
  element.classList.remove('alert-selected');
}

export function addClassAlertSelected(element) {
  element.classList.add('alert-selected');
}

export function removeClassAlertActive(element) {
  element.classList.remove('alert-active');
}
