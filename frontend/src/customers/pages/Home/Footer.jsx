import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
export default function Footer() {
  return (
    <footer class="bg-gray-900 text-white py-6">
      <div class="container mx-auto flex justify-between items-center px-4">
        <div class="flex space-x-4">
          <a href="#" class="text-white hover:text-gray-400">
            <InstagramIcon />
          </a>
          <a href="#" class="text-white hover:text-gray-400">
            <FacebookIcon />
          </a>
          <a href="#" class="text-white hover:text-gray-400">
            <TwitterIcon />
          </a>
        </div>
        <div class="text-center">
          <p class="text-gray-400">&copy; 2024 Eatbite</p>
        </div>
      </div>
    </footer>
  );
}
