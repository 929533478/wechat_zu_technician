<?php
require("database.php");
$job_number = $_POST['job_number'];
//$datas = get("friend_circle",'job_number',$job_number);
$datas = sql_str("select * from friend_circle where `job_number`='$job_number' order by date desc");
$i = 0;
foreach($datas as $data)
{
    if($data['img'] != "")
    {
        $datas[$i]['img'] = explode(",", $data['img']);
        $j = 0;
        foreach($datas[$i]['img'] as $imgid)
        {
            $result = get("technician_photo",'ID',$imgid);
            if($result)
            {
                $datas[$i]['img'][$j] = $result[0]['img'];
            }
            $j++;
        }
    }
    else
    {
        $datas[$i]['img'] =[];
    }
    
    if($data['video'] != "")
    {
        $datas[$i]['video'] = explode(",", $data['video']);
        array_pop( $datas[$i]['video']);
        $j = 0;
        foreach($datas[$i]['video'] as $videoid)
        {
            $result = get("technician_video",'ID',$videoid);
            if($result)
            {
                $datas[$i]['video'][$j] = $result[0]['dir'];
            }
            $j++;
        }
    }
    else
    {
        $datas[$i]['video'] =[];
    }
    

    $tm1 = $datas[$i]['date'];
    $tm2 = time();
    $gap = $tm2-$tm1;

    $datas[$i]['date']=$gap;
    $i++;

}
$jb = get("technician",'job_number',$job_number);
$head = "";
$background = "";
if(!$jb)
{
    $jb = "";
}
else
{
    $jb = $jb[0];
    if(!is_null($jb['friend_circle_background']))$background = $jb['friend_circle_background'];
    if(!is_null($jb['photo']))$head = $jb['photo'];
}
echo json_encode(['status'=>1,'data'=>$datas,'head'=>$head,'background'=>$background]);

?>