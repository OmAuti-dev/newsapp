import React, { Component } from "react";
import { InfinitySpin } from "react-loader-spinner";

const Spinner = () => {
  
    return (
      <div>
        <InfinitySpin
      
          visible={true}
          width="200"
          color="black"
          ariaLabel="infinity-spin-loading"
        />
      </div>
    );
  }


export default Spinner;
