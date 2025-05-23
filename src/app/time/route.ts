export default function GET(){
return Response.json({time: new Date().toISOString()})
}