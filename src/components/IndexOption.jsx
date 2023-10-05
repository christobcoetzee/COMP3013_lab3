import Cover from './Cover.jsx';

function IndexOption({ title, cover, index, selected, updateSelection }) {
  const clickHandler = (e) => {
    updateSelection(index);
  };

  return (
    <li className="index__album" onClick={clickHandler} aria-selected={selected} data-index={index}>
      <Cover cover={cover} />
      {title}
    </li>
  );
}

export default IndexOption;