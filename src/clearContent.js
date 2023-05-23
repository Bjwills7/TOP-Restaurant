function clearContainer(content) {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

export { clearContainer };
