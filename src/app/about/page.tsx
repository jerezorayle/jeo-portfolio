export default function About() {
    return (
        <div className="flex flex-col items-start justify-start h-[86vh]">
            <h1 className="text-2xl font-bold uppercase">Biography</h1>
            <p className="mt-4 text-md text-left">
                When I was a kid, I had the passion of finding solutions to every problems and analyzing things. 
                I used to be the one who they approach whenever there's an issue with something needed to get fixed. 
                I loved the challenge of taking things apart and putting them back all together and I'd always enjoyed doing it.
            </p>
            <p className="mt-4 text-md text-left">
                Now, I can apply the same approach I learned whenever I program, code, and build web/software applications especially when there a problem arising (eg. bugs, errors, inaccuracy, etc). 
                I also learned to organize my way to make things easier, usable and efficient in the long run - applying software engineering principles I learned throughout the years of experience in coding.
            </p>
            <blockquote className="mt-6 border-l-5 pl-6 italic">
            "When you fall in love with the process rather than the product, you don’t have to wait to give yourself permission to be happy. You can be satisfied anytime your system is running. And a system can be successful in many different forms, not just the one you first envision." - James Clear
            </blockquote>
        </div>
    );
}