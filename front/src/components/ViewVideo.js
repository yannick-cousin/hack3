const ViewVideo = (props) => {
  return (
    <div className="viewvideo">
      <iframe
				src={`https://www.youtube.com/embed/${props.link.map(
							(el) => el.youtubelink
						)}`}
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
				allowfullscreen
				className="player"
			>
      </iframe>
    </div>
  );
}

export default ViewVideo;