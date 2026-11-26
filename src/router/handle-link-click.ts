import navigate from "./navigate";

export function handleLinkClick(event: MouseEvent, path: string): void {
  if (
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return;
  }
  event.preventDefault();

  navigate(path);
}
