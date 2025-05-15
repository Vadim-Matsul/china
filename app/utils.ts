

export function scrollToBlockByID (props: { id: string }) {
  const block = document.getElementById(props.id);

  if (block) {
    block.scrollIntoView({
      behavior: 'smooth', // Плавная прокрутка
      block: 'center',     // Центрирование по вертикали
      inline: 'center'     // Центрирование по горизонтали (если нужно)
    });
  }
}
