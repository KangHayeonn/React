import React from "react";
import PropTypes from "prop-types";

const MyComponent = ({ name, children }) => {
  return (
    <div>
      안녕하세요 제 이름은 {name}입니다. <br />
      제가 좋아하는 라이브러리는 {children}
      입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름",
};

MyComponent.propTypes = {
  name: PropTypes.string,
};

export default MyComponent;
