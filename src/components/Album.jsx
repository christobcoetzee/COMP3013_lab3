import Cover from './Cover.jsx';
import Track from './Track.jsx';

import albums from '../data.js';


function Album({ album }) {
  return (
    <main className="album">
      <div className="album__detail">
        <h1 className="album__title">{album.name}</h1>
        <ol className="album__tracks">
          {
            album.tracks.map((track, key) => {
              return <Track title={track} key={key} />
            })
          }
        </ol>
      </div>
      <Cover title={album.name} cover={album.coverImg} />
    </main>
  );
}

export default Album;