import logo from "../assets/Crytek_Logo.svg";

const getCroppedImageUrl = (url: string) => {
  if (!url) return logo;

  const target = "media/";
  const index = url.indexOf(target) + target.length;
  const test = url.slice(0, index) + "crop/600/400/" + url.slice(index);
  console.log(test);
  return test;
};

export default getCroppedImageUrl;
