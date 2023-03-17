import { useEffect, useState } from "react"

export default function Dropdown({ options, onClick }) {
    const [showOption, setShowOption] = useState(false)
    const [selectedOption, setSelectedOption] = useState(options[0])
    const dropdownHandler = (value) => {
        setSelectedOption(value)
        onClick && onClick(value)
        setShowOption(false)
    }

    return <div className="border rounded-full py-2 px-4 flex items-center justify-between bg-white w-max cursor-pointer" onClick={() => setShowOption(!showOption)}>
        <img src={selectedOption?.icon} width={25} height={25} alt="asds" />
        <p className="ml-3 font-semibold">{selectedOption?.label}</p>
        {
            showOption && <div className="border w-36 mt-2 rounded-lg absolute bg-white">
                {options?.map((item, i) => (<p key={i} className="p-3 cursor-pointer hover:bg-green-200 hover:text-white flex" onClick={() => dropdownHandler(item)}>
                    <img src={item?.icon} width={25} height={25} alt="asds" className='mr-2' />
                    <div>
                        {item?.label}
                    </div>

                </p>))}
            </div>
        }
    </div>

}