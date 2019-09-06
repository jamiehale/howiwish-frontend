import React from 'react';

export const paragraphethize = t => t ? t.split(/[\r\n]+/).map((p, i) => <p key={i}>{p}</p>) : undefined;
