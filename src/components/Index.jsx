import IndexOption from './IndexOption.jsx';

function Index({ albums, selected, updateSelection }) {
  function isSelected(key) {
    return (key === selected);
  }

  return (
    <nav className="nav">
      <ul className="index">
          {
            albums.map((album, key) => {
              return <IndexOption title={album.name} cover={album.coverImg} selected={isSelected(key)} updateSelection={updateSelection} index={key} key={key} />
            })
          }
      </ul>
    </nav>
  );
}

export default Index;