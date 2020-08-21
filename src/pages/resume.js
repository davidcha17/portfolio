import React from "react"
import ResumePDF from '../images/david_cha_resume.pdf'

import Layout from '../components/layout'
import Content from '../components/content'

const Resume = () => {

    return (
        <Layout>
            <Content>
                <object data={ResumePDF} type="application/pdf" aria-label="David Software Engineering Resume" style={{ height: `75vh`, width: `100%` }}></object>
                <a href={ResumePDF} download="David Cha - Software Engineer - Resume">Download as a PDF</a>
            </Content>
        </Layout>
    )
}

export default Resume