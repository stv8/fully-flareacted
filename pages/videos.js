export async function getEdgeProps() {
    // const response = await fetch('http://localhost:8080/api/videos');
    const response = await fetch("https://skatevideo.site/api/videos");
    // const videos = await response.text();
    // console.log(videos);
    const { data: videos } = await response.json();

    return {
        props: {
            videos,
        },
    };
}


export default function Videos({ videos }) {
    return (
        <div>
            <h1>Vidoes</h1>
            <ul>
                {videos.map((video) => {
                    return <li key={video.id}>
                        <img src={`https://assets.skatevideo.site/covers/${video.title}.jpg`} />
                        {video.title || video.title2}
                    </li>;
                })}
            </ul>
        </div>
    );
}