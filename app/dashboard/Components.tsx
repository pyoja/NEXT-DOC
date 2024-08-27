// app/dashboard/Components.tsx

export function PostFeed() {
  // 5초 딜레이 추가
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        <div>
          <h2>Post Feed</h2>
          <p>Posts will be displayed here.</p>
        </div>
      );
    }, 3000);
  });
}

export function Weather() {
  // 5초 딜레이 추가
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        <div>
          <h2>Weather</h2>
          <p>Weather information will be displayed here.</p>
        </div>
      );
    }, 5000);
  });
}
