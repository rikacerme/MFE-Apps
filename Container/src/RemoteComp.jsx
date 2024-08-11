import React from 'react';
import Header from 'solidApp/Header';
import SolidWrapper from './SolidWrapper';

const RemoteComp = () => {
    return (
        <div>
            RemoteComp
            <SolidWrapper solidComponent={Header} someProp="value" />
        </div>
    );
};

export default RemoteComp;