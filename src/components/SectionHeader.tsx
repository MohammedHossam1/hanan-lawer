import React from 'react'

const SectionHeader = ({ subTitle,title ,desc}: { title: string; subTitle: string; desc: string }) => {
    return (
        <div className="text-center max-w-3xl mx-auto mb-5 lg:mb-16 space-y-2 lg:space-y-5 ">
            <p className="text-accent font-semibold text-lg ">{subTitle}</p>
            <h2 className="text-3xl  md:text-4xl lg:text-5xl font-bold text-primary ">
                {title}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
                {desc}
            </p>
        </div>
    )
}

export default SectionHeader