export default function Shell({cmd} : {readonly cmd : string}){
    return <p className="text-sm bg-black text-white px-2 py-1 border border-transparent rounded-xl my-2">
        {cmd}
      </p>
}