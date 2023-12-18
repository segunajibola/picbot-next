import { saveAs } from "file-saver";
import { GrDownload } from "react-icons/gr";
import { MdOutlineCancel } from "react-icons/md";

const Modal = ({ currentImg, setModal, term }) => {
  const { id, webformatURL, user, comments, downloads, likes } = currentImg;

  const downloadImage = () => {
    saveAs(webformatURL, `${term}.jpg`);
  };

  return (
    <>
      <div className="fixed w-[23rem] md:w-8/12 h-[370px] md:h-4/6 bg-green-400 p-2 rounded-lg">
        <div
          onClick={() => {
            setModal((prev) => !prev);
          }}
          className="absolute top-2 md:top-6 right-4 md:right-8 cursor-pointer text-3xl drop-shadow-lg text-black"
        >
          <MdOutlineCancel className="text-[30px]"/>
        </div>

        <div className="flex bg-green-200 h-[355px] md:h-[430px] justify-center items-center text-red-500 p-5 rounded-lg">
          <div>
            <img
              className="h-[330px] md:h-[350px] rounded-lg"
              src={webformatURL}
              alt=""
            />
          </div>
          <div className="h-full p-2 pb-0 md:p-10 space-y-4 md:space-y-4 text-xl">
            <h1>Comment: {comments}</h1>
            <h1>Download: {downloads}</h1>
            <h1 className="pb-[100px] md:pb-[170px]">Likes: {likes}</h1>
            <p
              className="border-[2px] border-green-400 cursor-pointer text-sm md:text-md text-center rounded-md"
              onClick={downloadImage}
            >
              Download <GrDownload className="inline mb-1" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;