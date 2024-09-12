const DropdownMenu = ({
    listMenuItems,
    width = 'w-fit'
}) => {
    return (
        <div className={`${width} h-fit mt-1 bg-white-primary flex flex-col justify-center items-center rounded-[4px] shadow-md p-2 text-black-secondary`}>

            {listMenuItems.map((item, index) => (
                <div key={index} className="w-full">
                    {item}
                </div>
            ))}

        </div>
    );
};

export default DropdownMenu;