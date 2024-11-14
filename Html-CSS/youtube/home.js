const playlistId = 'PLwUa7obPhEvnYA5A5zZG-XrSuv7B9bjnW';
const maxResults = 50;
const apiKey = 'AIzaSyC1oPHFfZrZmNGB_GX0ztT-mXTlQXbZ83s';

const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${maxResults}&key=${apiKey}`;

const getVideos = async () => {
  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error('Something went wrong with the YouTube API');

    const videos = await response.json();

    return videos;
  } catch (error) {
    throw error;
  }
}

const renderCards = async () => {
  try {
    const videoContainer = document.querySelector('[video-card=container]');
    const videoCardTemplate = document.querySelector('[video-card=card]').cloneNode(true);

    videoContainer.innerHTML = '';

    const videos = await getVideos();

    videos.items.forEach((video) => {
      const videoCard = videoCardTemplate.cloneNode(true);
      const videoImage = videoCard.querySelector('[video-card=image]');
      const videoTitle = videoCard.querySelector('[video-card=title]');
      const videoCreator = videoCard.querySelector('[video-card=creator]');
      const videoImageLink = videoCard.querySelector('[video-card=image-link]');
      const videoCreatorLink = videoCard.querySelector('[video-card=creator-link]');
      const videoContentLink = videoCard.querySelector('[video-card=content-link]');
      
      videoImage.src = video.snippet.thumbnails.maxres.url;
      videoTitle.innerText = video.snippet.title;
      videoCreator.innerText = video.snippet.videoOwnerChannelTitle;

      videoImageLink.href = `https://youtube.com/watch?v=${video.snippet.resourceId.videoId}`;
      videoCreatorLink.href = `https://www.youtube.com/@seirei5386`;
      videoContentLink.href = `https://youtube.com/watch?v=${video.snippet.resourceId.videoId}`;

      videoContainer.appendChild(videoCard);
    })
    
  } catch (error) {
    console.log(error);
  }
}

renderCards();