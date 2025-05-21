import UserName from "./Username"
import UserStatus from "./Userstatus"

export default function UserProfile({profile}) {
    return (
        <>

        <UserName nome={profile.nome}/>
        <UserStatus status={profile.status}/>

        </>
    )
}