const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_API_KEY =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=";

export const LIVE_CHAT_COUNT = 25;

const TEXT_SEARCH_API_BASE =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=";

export function generateSearchURL(query) {
  return `${TEXT_SEARCH_API_BASE}${query}&key=${GOOGLE_API_KEY}`;
}

export const commentsData = [
  {
    name: "Manasa K",
    Comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo provident vel.",
    replies: [],
  },
  {
    name: "Manasa K",
    Comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo provident vel.",
    replies: [
      {
        name: "Manasa K",
        Comment:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo provident vel.",
        replies: [
          {
            name: "Manasa K",
            Comment:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo provident vel.",
            replies: [
              {
                name: "Manasa K",
                Comment:
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo provident vel.",
                replies: [
                  {
                    name: "Manasa K",
                    Comment:
                      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo provident vel.",
                    replies: [],
                  },
                ],
              },
            ],
          },
          {
            name: "Manasa K",
            Comment:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo provident vel.",
            replies: [],
          },
        ],
      },
      {
        name: "Manasa K",
        Comment:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo provident vel.",
        replies: [],
      },
      {
        name: "Manasa K",
        Comment:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo provident vel.",
        replies: [],
      },
    ],
  },
  {
    name: "Manasa K",
    Comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo provident vel.",
    replies: [],
  },
  {
    name: "Manasa K",
    Comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo provident vel.",
    replies: [],
  },
  {
    name: "Manasa K",
    Comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo provident vel.",
    replies: [],
  },
];

export const youtubeButtons = [
  "All",
  "Mixes",
  "Coding",
  "Library",
  "Music",
  "Gaming",
  "Live",
  "News",
  "Sports",
  "Fashion",
  "Education",
  "Technology",
];
