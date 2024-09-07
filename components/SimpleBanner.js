const SimpleBanner = () => {
  return (
    <>
      <div
        className={`absolute left-0 right-0 top-0 z-50 transition-all duration-300 ease-in-out`}
      >
        <div className="flex w-full items-center justify-center gap-x-6 bg-black px-6 py-3 sm:px-3.5">
          <div className="flex items-center text-sm font-medium leading-6 text-[#ff7900]   bg-clip-text gap-5">
            <p>{`Propulsé par Orange Tunisie`}</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className=" w-5 h-5">

              <path fill="#ff7900" d="M0 0h50v50H0z" />
              <path fill="#fff" id="b" strokeWidth=".18" d="M19.61 45.16a4.1 4.1 0 01-2.29.69c-1.3 0-2.06-.87-2.06-2.02 0-1.56 1.43-2.39 4.38-2.72v-.39c0-.5-.39-.8-1.1-.8a2.07 2.07 0 00-1.69.8l-1.23-.7q.97-1.36 2.96-1.36c1.82 0 2.83.78 2.83 2.06v5.05h-1.63zm-2.56-1.47c0 .47.3.9.82.9.58 0 1.14-.23 1.7-.73v-1.64c-1.71.21-2.52.65-2.52 1.48zm5.8-4.7l1.51-.2.17.82c.86-.63 1.54-.96 2.4-.96 1.42 0 2.16.76 2.16 2.27v4.84h-1.83v-4.52c0-.86-.22-1.24-.88-1.24-.55 0-1.1.25-1.71.77v5h-1.82zm18.37 6.9c-2.05 0-3.27-1.31-3.27-3.6 0-2.3 1.23-3.64 3.24-3.64 2.01 0 3.2 1.28 3.2 3.54l-.01.36h-4.64c.02 1.31.57 1.98 1.64 1.98.7 0 1.15-.28 1.58-.88l1.34.74c-.59.99-1.65 1.5-3.08 1.5zm1.37-4.52c0-.93-.53-1.48-1.4-1.48-.82 0-1.34.53-1.41 1.48zm-36.44 4.6c-1.8 0-3.44-1.15-3.44-3.67s1.63-3.67 3.44-3.67c1.82 0 3.45 1.16 3.45 3.67 0 2.52-1.64 3.67-3.45 3.67zm0-5.8c-1.36 0-1.62 1.24-1.62 2.12 0 .88.26 2.13 1.62 2.13 1.37 0 1.63-1.24 1.63-2.13 0-.9-.26-2.12-1.63-2.12zm4.7-1.36h1.74v.81a2.7 2.7 0 011.92-.96 1.52 1.52 0 01.24.02v1.71h-.09c-.8 0-1.67.13-1.94.75v4.62h-1.87zm22.72 5.46c1.4 0 1.51-1.42 1.51-2.34 0-1.09-.53-1.98-1.52-1.98-.66 0-1.39.48-1.39 2.05 0 .86.06 2.28 1.4 2.27zm3.27-5.48v6.58c0 1.17-.09 3.08-3.4 3.1-1.37 0-2.64-.54-2.9-1.73l1.81-.3c.08.35.29.7 1.31.7.95 0 1.41-.46 1.41-1.55v-.81l-.02-.03c-.3.52-.73 1.02-1.8 1.02-1.62 0-2.9-1.13-2.9-3.48 0-2.33 1.32-3.63 2.8-3.63 1.39 0 1.9.63 2.02.96h-.02l.15-.83zm8.27-2.31h-.72v1.99h-.38v-2h-.72v-.3h1.82zm3 1.99h-.38v-1.92h-.01l-.75 1.92h-.24l-.76-1.92v1.92h-.39v-2.3h.59l.68 1.75.68-1.74h.58z" />
            </svg>

          </div>
        </div>
      </div>
    </>
  )
}

export default SimpleBanner