import { View, Image } from "react-native";
import Cup from "../../assets/cup.png";
import { Style } from "./style";
import {
  Canvas,
  LinearGradient,
  Path,
  Easing,
  useLoop,
} from "@shopify/react-native-skia";

export function CoffeeWithSmoke() {
  const smokeAnimated = useLoop({
    duration: 3000,
    easing: Easing.quad,
  });

  const smokeAnimated2 = useLoop({
    duration: 2000,
    easing: Easing.circle,
  });
  return (
    <View style={Style.Container}>
      <Canvas style={Style.Canvas}>
        <Path
          path="M40.11 128.02C39.5258 125.027 37.3176 122.766 35.5108 120.408C33.7062 118.047 32.1659 114.885 33.2421 112.042C34.2897 109.27 37.3478 108.104 40.1038 107.745C42.8606 107.38 45.8351 107.418 48.058 105.806C51.8244 103.094 51.351 96.4394 47.9836 92.6068C44.6171 88.7916 39.3879 87.6688 34.6283 88.2674C33.2336 88.432 31.5856 88.9699 31.1943 90.406C30.6969 92.229 32.6355 93.6203 34.3183 94.2158C36.002 94.803 38.0653 95.6026 38.3381 97.4704C36.4467 98.1949 34.5198 98.9847 32.9562 100.366C31.3919 101.747 30.2258 103.835 30.3777 105.966C30.4978 107.645 31.4035 109.294 30.9596 110.925C30.0414 114.266 24.7262 114.018 23.4873 117.276C22.6358 119.494 24.2505 121.715 25.1152 123.883C25.962 126.001 26.1015 128.374 26.5703 130.639C27.0398 132.905 27.968 135.251 29.8221 136.436C33.7217 138.928 41.0011 132.627 40.11 128.02Z"
          color="#D7D5D5"
          opacity={smokeAnimated}
        />
        <Path
          opacity={smokeAnimated}
          color="#D7D5D5"
          path="M19.0628 94.756C16.1882 95.0436 13.1657 93.7789 12.5327 91.0144C11.8361 87.9867 14.0978 84.0668 12.9263 81.2872C11.9671 79.0227 9.24207 78.7571 7.24617 77.9075C4.33444 76.6595 2.75538 73.826 1.31656 71.1943C0.499136 69.696 -0.312083 68.1028 0.12026 65.8649C0.762576 62.4995 3.88815 59.2329 6.86342 57.4614C9.77592 55.6923 13.0875 54.6727 15.6986 55.8167C18.3112 56.9554 19.7586 60.7137 18.1012 63.8757C17.0552 65.8853 15.126 67.2532 13.5872 68.9389C12.0453 70.6245 10.7762 73.1811 11.6494 74.7796C12.8992 77.0714 17.3094 75.4115 18.7374 77.8619C19.733 79.5711 18.6018 82.2613 19.5416 84.0221H19.5424C21.047 86.826 26.9364 84.9446 27.5949 88.6983C28.269 92.5757 21.4794 94.4435 19.0628 94.756Z"
        />

        <Path
          opacity={smokeAnimated}
          color="#D7D5D5"
          path="M55.7094 53.5947C58.3182 55.1461 61.5344 57.2156 63.2165 55.7894C64.8041 54.4512 63.6775 50.9462 62.4921 48.1135C59.5284 41.1545 55.9899 33.185 49.6744 29.6604C46.5992 27.9732 43.228 27.7069 39.9645 26.9748C36.701 26.2147 33.2129 24.7171 32.0561 21.6454C30.6955 18.0381 33.0656 13.8846 35.3537 10.6535C37.8222 10.429 40.4852 10.3372 42.3068 8.88589C44.126 7.44903 44.305 3.87129 42.0495 2.56416C40.4286 1.6409 38.5141 2.49588 37.2969 3.77646C36.0789 5.054 35.2359 6.70177 33.8986 7.92166C31.5943 10.0178 28.2533 10.6065 25.2626 10.8826C22.2718 11.1406 19.343 11.1626 16.4724 12.4704C12.2163 14.3853 8.46549 19.2193 6.60672 24.1246C5.34534 27.4899 5.22214 31.3378 7.6163 31.2968C8.57474 31.2907 9.723 30.6717 10.7721 30.5556C13.3367 30.2901 14.7306 32.8816 17.1999 33.5029C19.6584 34.1318 22.7305 32.852 25.5275 31.6579C28.3207 30.4539 31.3169 29.2758 34.1202 30.0898C36.925 30.9053 39.0844 34.5976 37.4681 37.0275C36.3725 38.6882 34.1349 39.1123 32.156 39.2094C30.1787 39.2951 28.11 39.2147 26.3217 40.2851C24.5335 41.3586 23.3248 44.095 24.5621 45.4439C22.6724 44.9538 20.4611 47.062 20.0636 49.1938C19.6646 51.324 20.6927 53.2062 22.1928 54.3389C27.4785 58.3991 31.7353 52.327 37.348 50.7027C43.4093 48.9768 49.9867 50.1216 55.7094 53.5947Z"
        />
        <Path
          opacity={smokeAnimated}
          color="#D7D5D5"
          path="M29.6817 4.25056C30.7138 3.31896 31.2135 1.83431 30.902 0.573454C28.8713 -0.117664 26.6507 -0.190488 24.4797 0.38987C22.8642 0.80712 20.9124 2.14762 20.8644 3.79538C20.8334 4.81347 21.6284 5.45453 22.5496 5.59033C23.4546 5.63736 28.6574 4.31353 29.6817 4.25056Z"
        />
        <Path
          opacity={smokeAnimated}
          path="M64.0539 224.172C63.0712 222.803 61.6606 221.888 60.2833 221.005C59.5019 220.504 58.5592 219.988 57.7312 220.388C57.2232 220.633 56.8899 221.173 56.6473 221.721C51.3366 233.852 70.1899 232.696 64.0539 224.172Z"
        />

        <Path
          opacity={smokeAnimated}
          path="M64.0539 224.172C63.0712 222.803 61.6606 221.888 60.2833 221.005C59.5019 220.504 58.5592 219.988 57.7312 220.388C57.2232 220.633 56.8899 221.173 56.6473 221.721C51.3366 233.852 70.1899 232.696 64.0539 224.172Z"
          color="#D7D5D5"
        />
        <Path
          opacity={smokeAnimated}
          path="M52.0728 195.105C54.2382 191.385 58.7061 190.42 62.6208 189.421C65.0915 188.785 67.5822 187.969 69.5395 186.307C71.4968 184.641 72.8368 181.966 72.3795 179.243C71.9755 176.835 70.2328 174.772 68.1928 173.6C66.1515 172.431 63.8382 172.038 61.5662 171.88C58.7635 171.679 55.5302 172.041 53.9368 174.528C53.1235 175.796 52.8635 177.453 51.8688 178.564C50.0635 180.58 46.9528 179.827 44.4675 180.697C40.9222 181.938 39.0568 186.464 39.3181 190.428C39.5808 194.396 41.4515 197.966 43.2715 201.417C44.6088 203.927 49.2702 213.968 51.9222 209.461C54.1355 205.716 49.3422 199.803 52.0728 195.105Z"
          color="#D7D5D5"
        />
        <Path
          opacity={smokeAnimated2}
          path="M88.9756 163.688C91.2942 161.293 91.9382 156.912 89.7129 153.545C87.1729 149.699 82.4169 149.007 78.3449 149.007C77.4422 149.723 77.9076 151.431 78.7396 152.471C79.5716 153.511 80.7036 154.323 81.2636 155.535C85.1543 163.721 70.4502 158.109 72.7409 163.688C75.5462 170.095 86.3409 166.3 88.9756 163.688Z"
          color="#D7D5D5"
        />
        <Path
          opacity={smokeAnimated2}
          path="M25.4947 138.22C25.0614 135.703 22.1547 134.495 19.912 135.94C18.596 137.808 18.5653 140.428 19.8413 141.795C21.116 143.165 23.7867 139.629 25.4947 138.22Z"
          color="#D7D5D5"
        />
        <Path
          opacity={smokeAnimated2}
          path="M11.7255 93.5721C13.1935 91.1747 15.5882 89.6361 17.8548 88.9774C20.1188 88.3121 22.3535 88.3521 24.6535 88.1134C29.7922 87.5614 35.5309 85.4921 39.5762 81.3334C40.5789 80.2974 41.5296 78.7934 41.0002 77.5587C40.5349 76.4787 39.1348 76.2587 37.9828 76.6334C36.8335 77.0054 35.8042 77.8067 34.6895 78.3334C31.6282 79.7801 28.4002 79.0761 25.7069 78.1241C23.0149 77.1681 20.4162 75.9614 17.4349 76.5707C12.5855 77.5721 8.22549 82.9627 4.54149 87.9867C2.99483 90.0947 1.39221 92.4321 0.825542 94.7721C0.0708755 97.8827 1.37753 99.8481 2.68153 101.563C3.74953 102.967 4.92151 104.456 6.82684 104.652C13.7722 105.537 9.52154 97.2307 11.7255 93.5721Z"
          color="#D7D5D5"
        />
        <Path
          opacity={smokeAnimated2}
          path="M73.3348 56.2348C79.0708 54.5388 85.4414 53.8255 91.0214 58.8228C93.1494 60.7175 94.9988 63.2415 97.0815 65.1508C99.1708 67.0468 101.732 68.2802 102.551 66.7588C103.476 65.0415 101.764 61.0042 99.9027 58.0042C92.7307 46.1842 81.6654 39.7122 70.8107 38.8868C68.8601 38.7055 66.8134 38.6948 65.2294 39.6962C63.6441 40.6988 62.7254 42.9922 63.7054 44.9175C64.3441 46.1708 65.6801 47.1882 65.8081 48.5441C66.0174 50.7148 63.2614 51.1068 61.2294 51.4121C58.2254 51.5442 45.3721 62.0828 50.8774 65.1495C54.0041 66.3562 70.5308 56.5135 73.3348 56.2348Z"
          color="#D7D5D5"
        />
        <Path
          opacity={smokeAnimated2}
          path="M36.9494 15.5602C35.3708 14.2415 32.8601 14.3388 30.8028 15.7002C28.7441 17.0508 27.1854 19.5002 26.6161 21.8735C26.2134 23.5588 26.3348 25.3268 27.3922 26.1442C28.5882 27.0695 30.5468 26.5628 32.3095 26.1068C34.7068 25.4642 37.6708 25.6135 38.7361 22.7522C38.9201 22.2455 37.2214 15.7775 36.9494 15.5602Z"
          color="#D7D5D5"
        />
        <Path
          opacity={smokeAnimated2}
          path="M68.3476 0.930728C68.3463 0.930728 68.3462 0.930728 68.3462 0.930728C68.1169 1.00273 67.8996 1.10139 67.6943 1.22806C63.7756 3.72273 67.7183 6.35873 70.733 5.16139C74.5676 3.73206 72.5449 -0.350605 68.3476 0.930728Z"
          color="#D7D5D5"
        />
      </Canvas>

      <Image source={Cup} alt="chávena de café" style={Style.Cup} />
    </View>
  );
}
