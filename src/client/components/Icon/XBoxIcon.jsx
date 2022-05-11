import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '@material-ui/core/SvgIcon';

let XBoxIcon = props => (
    <SvgIcon {...props}>
        <svg viewBox="0 0 24 24">
            <path d="M21 12a8.972 8.972 0 00-3.12-6.804 15.055 15.055 0 00-3.728 2.788c.033.035.066.064.098.1 2.79 3.01 5.333 7.298 4.91 9.353A8.949 8.949 0 0021 12zM12.444 5.967a9.658 9.658 0 014.44-1.52 8.964 8.964 0 00-9.312-.277c.493.425 2.128.585 4.113 1.8a.723.723 0 00.759-.003zM9.875 8.083c.035-.036.07-.068.104-.104a21.354 21.354 0 00-2.93-2.372 1.392 1.392 0 00-1.126-.232A8.983 8.983 0 005.06 17.73c-.773-1.91 1.858-6.504 4.815-9.647zM12.063 9.896c-2.972 2.63-7.108 6.55-6.474 8.416a8.979 8.979 0 0013.032-.23c.364-1.965-3.567-5.503-6.558-8.186z" />
        </svg>
    </SvgIcon>
);
XBoxIcon = pure(XBoxIcon);
XBoxIcon.displayName = 'XBoxIcon';
XBoxIcon.muiName = 'SvgIcon';

export default XBoxIcon;
