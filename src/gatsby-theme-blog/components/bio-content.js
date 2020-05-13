import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    Hi I'm Al!  This is my "new-and-improved" blog.
    {` `}
    <br />
    Also visit my <Styled.a href="https://alpiepho.github.io/project-portfolio3">portfolio</Styled.a>.
  </Fragment>
)
