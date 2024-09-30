import { useRouteError } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex items-center justify-center h-screen py-6">
      <div className="w-full max-w-lg border rounded shadow-lg mx-4">
        <div className='bg-red-500 w-full h-5'></div>
        <div className="flex justify-center items-center mt-5">
          <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#EA3323">
            <path d="M479.99-280q15.01 0 25.18-10.15 10.16-10.16 10.16-25.17 0-15.01-10.15-25.18-10.16-10.17-25.17-10.17-15.01 0-25.18 10.16-10.16 10.15-10.16 25.17 0 15.01 10.15 25.17Q464.98-280 479.99-280Zm-31.32-155.33h66.66V-684h-66.66v248.67ZM480.18-80q-82.83 0-155.67-31.5-72.84-31.5-127.18-85.83Q143-251.67 111.5-324.56T80-480.33q0-82.88 31.5-155.78Q143-709 197.33-763q54.34-54 127.23-85.5T480.33-880q82.88 0 155.78 31.5Q709-817 763-763t85.5 127Q880-563 880-480.18q0 82.83-31.5 155.67Q817-251.67 763-197.46q-54 54.21-127 85.84Q563-80 480.18-80Zm.15-66.67q139 0 236-97.33t97-236.33q0-139-96.87-236-96.88-97-236.46-97-138.67 0-236 96.87-97.33 96.88-97.33 236.46 0 138.67 97.33 236 97.33 97.33 236.33 97.33ZM480-480Z"/>
          </svg>
        </div>
        <div className="flex justify-center items-center p-5 font-bold text-2xl max-sm:text-xl">Page not found!</div>
        <div id="error-page">
          <p className="text-center max-sm:text-sm">Sorry, an unexpected error has occurred.</p>
          <p className="text-center max-sm:text-sm">
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
        <div className="flex justify-center items-center my-5">
          <div className="w-36 h-[7vh] flex justify-center items-center text-2xl bg-green-700 border text-white
           hover:bg-white hover:text-green-700 hover:border-green-700 max-sm:text-xl">
            <Link to="/">Back Home</Link>
          </div>
        </div>
        <div className='bg-red-500 w-full h-5'></div>
      </div>
    </div>
  );
}
