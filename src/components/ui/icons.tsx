type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  Twitter: (props: IconProps) => (
    <svg
      {...props}
      height="23"
      viewBox="0 0 1200 1227"
      width="23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
    </svg>
  ),

  GitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      />
    </svg>
  ),

  Google: (props: IconProps) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
      <g clipPath="url(#clip0_95:967)">
        <path
          d="M20.0001 10.2216C20.0122 9.53416 19.9397 8.84776 19.7844 8.17725H10.2042V11.8883H15.8277C15.7211 12.539 15.4814 13.1618 15.1229 13.7194C14.7644 14.2769 14.2946 14.7577 13.7416 15.1327L13.722 15.257L16.7512 17.5567L16.961 17.5772C18.8883 15.8328 19.9997 13.266 19.9997 10.2216"
          fill="#4285F4"
        />
        <path
          d="M10.2042 20.0001C12.9592 20.0001 15.2721 19.1111 16.9616 17.5778L13.7416 15.1332C12.88 15.7223 11.7235 16.1334 10.2042 16.1334C8.91385 16.126 7.65863 15.7206 6.61663 14.9747C5.57464 14.2287 4.79879 13.1802 4.39915 11.9778L4.27957 11.9878L1.12973 14.3766L1.08856 14.4888C1.93689 16.1457 3.23879 17.5387 4.84869 18.512C6.45859 19.4852 8.31301 20.0005 10.2046 20.0001"
          fill="#34A853"
        />
        <path
          d="M4.39911 11.9777C4.17592 11.3411 4.06075 10.673 4.05819 9.99996C4.0623 9.32799 4.17322 8.66075 4.38696 8.02225L4.38127 7.88968L1.19282 5.4624L1.08852 5.51101C0.372885 6.90343 0.00012207 8.4408 0.00012207 9.99987C0.00012207 11.5589 0.372885 13.0963 1.08852 14.4887L4.39911 11.9777Z"
          fill="#FBBC05"
        />
        <path
          d="M10.2042 3.86663C11.6663 3.84438 13.0804 4.37803 14.1498 5.35558L17.0296 2.59996C15.1826 0.901848 12.7366 -0.0298855 10.2042 -3.6784e-05C8.3126 -0.000477834 6.45819 0.514732 4.8483 1.48798C3.2384 2.46124 1.93649 3.85416 1.08813 5.51101L4.38775 8.02225C4.79132 6.82005 5.56974 5.77231 6.61327 5.02675C7.6568 4.28118 8.91279 3.87541 10.2042 3.86663Z"
          fill="#EB4335"
        />
      </g>
      <defs>
        <clipPath id="clip0_95:967">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),

  Apple: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
        fill="currentColor"
      />
    </svg>
  ),

  Spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),

  HeartIcon: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" width="24" height="24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      />
    </svg>
  ),

  PaperPlaneIcon: (props: IconProps) => (
    <svg
      {...props}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M22 2L11 13" />
      <path d="M22 2L15 22L11 13L2 11L22 2Z" />
    </svg>
  ),

  PencilIcon: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.263 2.17698C17.5911 1.84906 18.0361 1.66486 18.5 1.66486C18.9639 1.66486 19.4088 1.84906 19.737 2.17698L22.323 4.76298C22.6509 5.09114 22.8351 5.53607 22.8351 5.99998C22.8351 6.4639 22.6509 6.90883 22.323 7.23698L19.53 10.03L19.518 10.043L8.68999 20.378C8.49211 20.567 8.25272 20.7071 7.99099 20.787L2.46799 22.467C2.33814 22.5063 2.20002 22.5096 2.06843 22.4765C1.93684 22.4434 1.81674 22.3751 1.72099 22.279C1.62485 22.1832 1.55656 22.0631 1.52344 21.9315C1.49033 21.8 1.49363 21.6618 1.53299 21.532L3.20599 16.032C3.29374 15.7441 3.45424 15.4837 3.67199 15.276L14.476 4.96298L17.263 2.17698ZM4.70799 16.361C4.67707 16.3909 4.65405 16.428 4.64099 16.469L3.37699 20.623L7.55399 19.352C7.59145 19.3403 7.62568 19.3201 7.65399 19.293L17.927 9.48698L14.987 6.54798L4.70799 16.361ZM19 8.43998L21.263 6.17798C21.2863 6.15476 21.3047 6.12717 21.3173 6.0968C21.33 6.06643 21.3364 6.03387 21.3364 6.00098C21.3364 5.9681 21.33 5.93554 21.3173 5.90517C21.3047 5.87479 21.2863 5.84721 21.263 5.82398L18.677 3.23798C18.6538 3.2147 18.6262 3.19623 18.5958 3.18363C18.5654 3.17102 18.5329 3.16454 18.5 3.16454C18.4671 3.16454 18.4345 3.17102 18.4042 3.18363C18.3738 3.19623 18.3462 3.2147 18.323 3.23798L16.061 5.49998L19 8.43998Z"
        stroke="currentColor"
      />
    </svg>
  ),

  Chevron: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.22 8.22C5.15033 8.28956 5.09507 8.37218 5.05736 8.46312C5.01965 8.55406 5.00024 8.65155 5.00024 8.75C5.00024 8.84845 5.01965 8.94593 5.05736 9.03687C5.09507 9.12782 5.15033 9.21043 5.22 9.28L11.47 15.53C11.5396 15.5997 11.6222 15.6549 11.7131 15.6926C11.8041 15.7303 11.9015 15.7498 12 15.7498C12.0984 15.7498 12.1959 15.7303 12.2869 15.6926C12.3778 15.6549 12.4604 15.5997 12.53 15.53L18.78 9.28C18.8496 9.2104 18.9048 9.12777 18.9425 9.03683C18.9801 8.94589 18.9995 8.84843 18.9995 8.75C18.9995 8.65157 18.9801 8.5541 18.9425 8.46316C18.9048 8.37223 18.8496 8.2896 18.78 8.22C18.7104 8.1504 18.6278 8.09519 18.5368 8.05752C18.4459 8.01985 18.3484 8.00046 18.25 8.00046C18.1516 8.00046 18.0541 8.01985 17.9632 8.05752C17.8722 8.09519 17.7896 8.1504 17.72 8.22L12 13.939L6.28 8.22C6.21043 8.15033 6.12782 8.09507 6.03687 8.05736C5.94593 8.01965 5.84845 8.00024 5.75 8.00024C5.65155 8.00024 5.55406 8.01965 5.46312 8.05736C5.37218 8.09507 5.28956 8.15033 5.22 8.22Z"
        stroke="currentColor"
      />
    </svg>
  ),
};
