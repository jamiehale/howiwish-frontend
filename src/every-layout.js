export const theSidebar = (sideWidth, contentMinimumWidth, space) => `
  overflow: hidden;

  > * {
    display: flex;
    flex-wrap: wrap;
    margin: calc(${space} / 2 * -1);
  }

  > * > * {
    margin: calc(${space} / 2);
    flex-basis: ${sideWidth};
    flex-grow: 1;
  }

  > * > :last-child {
    flex-basis: 0;
    flex-grow: 999;
    min-width: calc(${contentMinimumWidth} - ${space});
  }
`;

export const theCenter = (maxWidth) => `
  margin-left: auto;
  margin-right: auto;
  max-width: ${maxWidth};
`;

export const theStack = (space) => `
  --space: ${space};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  > * {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  > * + * {
    margin-top: var(--space);
  }
`;

const bordersFromBorderWidth = (borderWidth) => {
  if (borderWidth) {
    return `${borderWidth} solid;`;
  }
  return `
    border: 0 solid;
    outline: var(--border-thin) solid transparent;
    outlint-offset: calc(var(--border-thin) * -1);
  `;
};

export const theBox = (padding, borderWidth) => `
  padding: ${padding};
  ${bordersFromBorderWidth(borderWidth)}

  * {
    color: inherit;
  }
`;
