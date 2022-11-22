import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";

const Star = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    debugger; // supose star=4.4
    //then index=[i=0,i=1,i=2,i=3,i=4]
    return (
      <span key={index}>
        {stars >= index + 1 ? ( //4.4>=0+1=1  *  *  *  *
          <FaStar className="icon" />
        ) : // 4.4>=1+1=2...
        // 4.4>=4+1 false out from 1st loop move to second
        stars >= number ? (
          <FaStarHalfAlt className="icon" /> // 4.4>=4+0.5 false
        ) : (
          //then
          <AiOutlineStar className="icon" /> // true
        )}
      </span>
    );
  });

  return (
    <Wrapper>
      <div className="icon-style">
        {ratingStar}
        <p>({reviews} customer reviews)</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;
    .icon {
      font-size: 2rem;
      color: orange;
    }
    .empty-icon {
      font-size: 2.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;

export default Star;
