import React from 'react';

const NodeImg = (props) => {
    const alt = props.alt && "";
    const src = ('ext' in props) ? props.ext : `${process.env.PUBLIC_URL}/${props.src}`

    const { width, height } = props;

    return <img src={src} alt={alt} width={width} height={height} />;
}

export default NodeImg
