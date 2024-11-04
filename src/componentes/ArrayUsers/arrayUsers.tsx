import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { openSans } from '../../app/fonts';

export default function ArrayList(){
    return(
        <>
        <div className="mt-12 w-full flex items-center justify-center flex-col">
            <div className="w-[60%] flex items-center justify-center flex-col ">
                <div className="w-full bg-gray-500 h-[1px]"></div>
                <div className='bg-white transition duration-300 cursor-pointer flex flex-row justify-between items-center w-full hover:bg-gray-200'>
                    <p className={`m-3 font-bold ${openSans.className}`}>Bruna Cardoso</p>
                    <KeyboardArrowRightIcon sx={{fontSize: 30}}/>
                </div>
            </div>
            <div className="w-[60%] flex items-center justify-center flex-col ">
                <div className="w-full bg-gray-500 h-[1px]"></div>
                <div className='bg-white transition duration-300 cursor-pointer flex flex-row justify-between items-center w-full hover:bg-gray-200'>
                    <p className={`m-3 font-bold ${openSans.className}`}>Bruna Cardoso</p>
                    <KeyboardArrowRightIcon sx={{fontSize: 30}}/>
                </div>
            </div>
            <div className="w-[60%] flex items-center justify-center flex-col ">
                <div className="w-full bg-gray-500 h-[1px]"></div>
                <div className='bg-white transition duration-300 cursor-pointer flex flex-row justify-between items-center w-full hover:bg-gray-200'>
                    <p className={`m-3 font-bold ${openSans.className}`}>Bruna Cardoso</p>
                    <KeyboardArrowRightIcon sx={{fontSize: 30}}/>
                </div>
            </div>
        </div>
        </>
    )
}