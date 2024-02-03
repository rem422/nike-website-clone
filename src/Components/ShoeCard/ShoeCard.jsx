
const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {

    const handleClick = () => {
        if (bigShoeImg !== imgURL.bigShoe) {
            changeBigShoeImage(imgURL.bigShoe);
        }
    }



    return (
        <div className={
        `border-2 rounded-xl
        ${bigShoeImg === imgURL ? 'border-coral-red' : 'border-transparent'} 
        cursor-pointer
        max-sm:flex-1
        `}
        onClick={handleClick()}
        >
            <div>
                <img src={imgURL.thumbnail} alt="" />
            </div>
        </div>
  )
};

export default ShoeCard