import Container from './Container';
import Logo from '../image/logo.png'

const Header = () => {

    return (
        <Container>

            <div className="relative py-3 flex items-center justify-between text-slate-700 font-medium text-sm leading-6 z-30">

                <div className="-my-1 lg:hidden">

                    <button type="button" className="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" fill="none">
                            <path d="M13.3333 8H21.3333M13.3333 18.6667H21.3333M13.3333 13.3333H29.3333M13.3333 24H29.3333M3.99996 13.3333H6.66663C7.40301 13.3333 7.99996 12.7364 7.99996 12V9.33333C7.99996 8.59695 7.40301 8 6.66663 8H3.99996C3.26358 8 2.66663 8.59695 2.66663 9.33333V12C2.66663 12.7364 3.26358 13.3333 3.99996 13.3333ZM3.99996 24H6.66663C7.40301 24 7.99996 23.403 7.99996 22.6667V20C7.99996 19.2636 7.40301 18.6667 6.66663 18.6667H3.99996C3.26358 18.6667 2.66663 19.2636 2.66663 20V22.6667C2.66663 23.403 3.26358 24 3.99996 24Z" stroke="#1E2B3B" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </button>

                </div>

                {/* LOGO */}

                <img
                    src={Logo}
                    alt="Logo"
                    className="h-full max-w-full transition-all duration-200 ease-soft-in-out max-h-12 " />


                <div className="flex items-center">

                    <button type="button" className="text-slate-500 hover:text-slate-600 w-8 h-8 -my-1 flex items-center justify-center lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 28 28" fill="none">
                            <path d="M21.5834 21.5833L25.6667 25.6666M24.5 13.4166C24.5 7.29543 19.5379 2.33325 13.4167 2.33325C7.29555 2.33325 2.33337 7.29543 2.33337 13.4166C2.33337 19.5377 7.29555 24.4999 13.4167 24.4999C19.5379 24.4999 24.5 19.5377 24.5 13.4166Z" stroke="#1E2B3B" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <div className="hidden lg:flex items-center">

                        <button type="button" className="text-slate-500 hover:text-slate-600 w-8 h-8 -my-1 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 28 28" fill="none">
                                <path d="M21.5834 21.5833L25.6667 25.6666M24.5 13.4166C24.5 7.29543 19.5379 2.33325 13.4167 2.33325C7.29555 2.33325 2.33337 7.29543 2.33337 13.4166C2.33337 19.5377 7.29555 24.4999 13.4167 24.4999C19.5379 24.4999 24.5 19.5377 24.5 13.4166Z" stroke="#1E2B3B" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                    </div>

                </div>

            </div>

        </Container>
    )
}

export default Header