import React from "react"
import ResumePDF from '../images/resume/Resume2020Oct.pdf'

import Layout from '../components/layout'

const Resume = () => {

    return (
        <Layout>
                <object data={ResumePDF} type="application/pdf" aria-label="David Software Engineering Resume" style={{ height: `75vh`, width: `100%` }}></object>
                <a href={ResumePDF} download="David Cha - Software Engineer - Resume">Download as a PDF</a>
        </Layout>
    )
}

export default Resume