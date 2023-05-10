export const Link = (props) => {
    return (
        <li>
            <a href={props.href} className="ml-10 hover:border-b-2 hover:dark:text-white">
                {props.text}
            </a>
        </li>
    )
}