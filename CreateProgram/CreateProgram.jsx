import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Card } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';
export default function CreateProgram() {
    // const [program, setProgram] = useState({});

    // Fetch API
    // const getID = useParams();
    const [programs, setPrograms] = useState([]);

    const baseURL = 'https://641176b863cb211e7e0fc146.mockapi.io/CreateProgram';
    const today = new Date();
    const arrayName = ['Warrior Tran', 'Johnny Deep', 'King James'];

    // const axiosAPI = () => {
    //     axios.get(baseURL)
    //         .then(res => setPrograms(res.programs))
    // }

    // const fetchAPI = () => {
    //     // fetch(baseURL)
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error(`HTTP status ${response.status}`);
    //             }
    //             return response.json();
    //         })
    //         .then((programs) => setPrograms(programs))
    // }

    // useEffect(() => {

    // }, [])

    // get Days and Hours
    // function getTotalDays(inputDay) {
    //     let sum = 0;
    //     let arrayDay = [];
    //     arrayDay = arrayDay.push(inputDay);
    //     for (let i = 0; i < arrayDay.length; i++) {
    //         sum += arrayDay[i];
    //     }
    //     return sum;
    // }

    // function getTotalHours(inputHour) {
    //     let sum = 0;
    //     let arrayHour = [];
    //     arrayHour = arrayHour.push(inputHour);
    //     for (let i = 0; i < arrayHour.length; i++) {
    //         sum += arrayHour[i];
    //     }
    //     return sum;
    // }

    // get input value and disabled at create program name
    const [isDisabled, setIsDisabled] = useState(true);

    const getInputValue = (e) => {
        localStorage.setItem('programName', e.target.value);
        if (e.target.value != '') {
            setIsDisabled(false);
        }
    }


    //Display create or content
    const [showProgram, setShowProgram] = useState(true);

    const goToContent = () => {
        setShowProgram(false);
    }
    const backToCreate = () => {
        localStorage.removeItem('programName')
        setShowProgram(true);
        setIsDisabled(true)
    }

    // show hints at select syllabus input
    const [showOptions, setShowOptions] = useState(false);
    const showLinux = (e) => {
        const value = e.target.value;
        if (value.toString().toLowerCase() === 'linux') {
            setShowOptions(true)
        } else {
            setShowOptions(false)
        }
    }

    const createNewProgram = () => {
        const program = {
            programName: localStorage.getItem('programName'),
            programStatus: true,
            programDays: 0,
            programHours: 0,
            createdDate: today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear(),
            userName: arrayName[Math.floor(Math.random() * arrayName.length)],
            programContent: [{
                contentName: localStorage.getItem('contentName'),
                contentStatus: localStorage.getItem('contentStatus'),
                acronym: localStorage.getItem('acronym'),
                contentDays: localStorage.getItem('contentDays'),
                contentHours: localStorage.getItem('contentHours'),
                contentCreatedDate: localStorage.getItem('contentCreatedDate'),
                contentUserName: localStorage.getItem('contentUserName')
            }]
        }

        axios.post(baseURL, program).then(() =>
            setPrograms([...programs, program])
        ).catch(error => console.log(error))
    }

    // get programs when user choose Linux program
    const getValueLinux = () => {
        localStorage.setItem('contentName', 'Linux');
        localStorage.setItem('contentStatus', true);
        localStorage.setItem('acronym', "LIN");
        localStorage.setItem('contentDays', Math.floor(Math.random() * 100) + 1);
        localStorage.setItem('contentHours', 12);
        localStorage.setItem('contentCreatedDate', today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear());
        localStorage.setItem('contentUserName', arrayName[Math.floor(Math.random() * arrayName.length)]);
        createNewProgram();
    }

    console.log(programs)

    return (
        <div>
            {showProgram ? (
                <>
                    <div>
                        <div>
                            <div>
                                <h1 className='bg-[#2D3748] text-white text-2xl mt-1 p-3 pl-5 tracking-[3px]'>New Training program</h1>
                            </div>
                            <div className='mt-5 pl-5'>
                                <label className='text-xs text font-medium'>Program name*</label>
                                <br />
                                <input className='border rounded-lg border-black h-7 w-3/12 placeholder: p-4 text-sm italic font-semibold' placeholder='Type program name'
                                    onChange={getInputValue} />
                                <button disabled={isDisabled} className='border rounded-lg border-black bg-[#2D3748] text-white font-normal h-8 w-20 ml-3'
                                    onClick={goToContent}>
                                    Create
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div>
                        <div>
                            <p className='bg-[#2D3748] text-white text-2xl tracking-[3px] w-full mt-1 p-3 pl-5 ' >
                                Training program
                                <br />
                                <p className='flex text-white text-3xl font-bold tracking-[3px] mt-3'>
                                    {localStorage.getItem('programName')}
                                    <label className='border rounded-full text-base tracking-[0] text-center bg-[#999796] w-20 h-7 ml-3 mt-1'>Active</label>
                                    <img src='/public/more_horizontal.png' className='ml-[700px] cursor-pointer' />
                                </p>
                            </p>
                        </div>
                        <div className='ml-2 p-4'>
                            <p className='font-light'>
                                <strong className='text-2xl font-bold'>123</strong>
                                <span> days</span>
                                <span className='italic ml-2'>
                                    (
                                    <strong className='font-bold'>24</strong>
                                    hours)
                                </span>
                            </p>
                            <p>Modified on <span className='italic'>21/07/2022</span> by <span className='font-bold'>Warrior Tran</span></p>
                        </div>
                        <hr className='border-black' />
                        <div className='ml-2 p-4'>
                            <h1 className='text-3xl font-bold mb-4'>Content</h1>
                            {programs.map(program => {
                                return program.programContent.map(content =>
                                (
                                    <Box className='flex' key={content.contentID}>
                                        <Box className='border rounded-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25),_-4px_-4px_4px_rgba(0,0,0,0.1)] pl-5 pt-3 w-[1000px]'>
                                            <span className='text-3xl font-bold tracking-[6px]'>{content.contentName}</span>
                                            <label className='border rounded-full bg-[#2D3748] text-white text-center ml-3 pl-3 pr-3'>{content.contentStatus ? "Active" : "Inactive"}</label>
                                            <div className='mt-3 mb-5'>
                                                <label className='font-normal text-sm'>{content.acronym}</label>
                                                <span className='ml-2'>|</span>
                                                <span className='ml-2'>{content.contentDays} days</span>
                                                <span className='ml-2'>({content.contentHours} hours)</span>
                                                <span className='ml-2'>|</span>
                                                <span className='ml-2'>Modified on
                                                    <span className='italic ml-1'>{content.contentCreatedDate}</span> by
                                                    <strong className='ml-1'>{content.contentUserName}</strong>
                                                </span>
                                            </div>
                                        </Box>
                                        <Box className='flex items-center justify-center border rounded-lg bg-[#E74A3B] w-8 ml-2'>
                                            <DeleteForeverIcon className='text-white cursor-pointer' />
                                        </Box>
                                    </Box>
                                )
                                )
                            })}

                            <div className='flex mt-5'>
                                <label className='font-bold'>Select syllabus</label>

                                <div className='border rounded-lg border-black ml-3 flex w-72'>
                                    <img src='/public/vector.png' className='p-1 ml-1' />
                                    <input className='italic rounded-lg outline-none w-full ml-1'
                                        onKeyUp={showLinux} />
                                </div>
                            </div>
                            <div className={showOptions ? 'modal bg-[#FFFFFF]' : "hidden"}>
                                <div className='modal-content w-[290px] ml-[120px]'>
                                    <Card className='pl-9 pt-1 pb-1'>
                                        <div>
                                            <button className='text-left hover:bg-[#F1F1F1]'
                                                onClick={getValueLinux}>
                                                <p className='font-bold'>Linux</p>
                                                <span className='italic text-xs'>12hrs</span>
                                                <span className='italic text-xs ml-10'>23/07/2022 by</span>
                                                <strong className='italic text-xs ml-1'>Johny Deep</strong>
                                            </button>
                                        </div>
                                        <div>
                                            <button className='text-left hover:bg-[#F1F1F1]'>
                                                <p className='font-bold'>Linux 0.2</p>
                                                <span className='italic text-xs'>15hrs</span>
                                                <span className='italic text-xs ml-10'>30/11/2020 by</span>
                                                <strong className='italic text-xs ml-1'>King James</strong>
                                            </button>
                                        </div>
                                        <div>
                                            <button className='text-left hover:bg-[#F1F1F1]'>
                                                <p className='font-bold'>Linux 2.0</p>
                                                <span className='italic text-xs'>9hrs</span>
                                                <span className='italic text-xs ml-10'>13/10/2019 by</span>
                                                <strong className='italic text-xs ml-1'>Warrior Tran</strong>
                                            </button>
                                        </div>
                                    </Card>
                                </div>
                            </div>
                            <div className='mt-10'>
                                <button className='border rounded-lg border-black bg-[#2D3748] text-white font-normal h-8 w-20'
                                    onClick={backToCreate}>
                                    Back
                                </button>
                                <button className='underline text-red-600 ml-[980px]'>Cancel</button>
                                <button className='border rounded-lg border-black bg-[#2D3748] text-white font-normal h-8 w-20 ml-3'>Save</button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>

    )
}
