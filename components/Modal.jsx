import { saveAs } from "file-saver";
import { GrDownload } from "react-icons/gr";
import { MdOutlineCancel } from "react-icons/md";

const Modal = ({ currentImg, setModal, term }) => {
  const { webformatURL, user, comments, downloads, likes } = currentImg;

  const downloadImage = () => {
    saveAs(webformatURL, `${term}.jpg`);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <div
      className="z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center
    items-center overflow-x-hidden overflow-y-auto fixed inset-0"
      onClick={handleCloseModal}
    >
      {/* <div className="fixed w-[23rem] md:w-8/12 h-[370px] md:h-4/6 bg-green-400 p-2 rounded-lg"> */}
      <div className="relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden">
        <div
          onClick={handleCloseModal}
          className="absolute top-2 md:top-4 right-4 cursor-pointer text-3xl drop-shadow-lg text-black"
        >
          <MdOutlineCancel className="text-[30px]" />
        </div>

        <div className="flex bg-gray-200 h-[60vh] justify-center p-4 rounded-lg">
          <img
            className="h-full rounded-lg overflow-hidden object-cover object-center"
            src={webformatURL}
            alt=""
          />

          <div className="p-2 flex flex-col justify-between md:p-6 text-xl">
            <div className="flex flex-col space-y-4">
              <h1>Comment: {comments}</h1>
              <h1>Download: {downloads}</h1>
              <h1>Likes: {likes}</h1>
              <h1>Posted by: {user}</h1>
            </div>

            <p
              className="border-[2px] border-green-400 cursor-pointer text-sm md:text-md text-center rounded-md"
              onClick={downloadImage}
            >
              Download <GrDownload className="inline mb-1" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
