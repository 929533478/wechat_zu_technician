<?php
require "database.php";

$job_number = $_POST["job_number"];

//找到对应工号的技师的类别
$type = sql_str("select type from technician where job_number = '$job_number'");

if ($type && count($type) > 0) {
    $type = $type[0]['type'];
}

$date = strtotime($_POST["date"]);
$date2 = "";
if (!isset($_POST["date2"])) {
    $date2 = $date;
} else {
    $date2 = strtotime($_POST["date2"]);
}

$service_order = get("service_order", "job_number", $job_number);
if (!$service_order) {
    $service_order = [];
}

$consumed_order = [];
$service_type = get("service_type");
if (!$service_type) {
    $service_type = [];
}

$last_soid = "";
$key_info = [];
//提成
$ticheng = 0;
//业绩
$yeji = 0;
$all_time = false;
if ($date == "") {
    $all_time = true;
}

foreach ($service_order as $so) {
    $one_consumed_order = get("consumed_order", "order_id", $so['order_id']);
    $time = $one_consumed_order[0]['generated_time'];
    if ($all_time) {
        $date = $time;
        $date2 = $time;
    }
    if ($so['service_type'] == 1 && ($time >= $date && $time <= $date2)) {
        foreach ($service_type as $tp) {
            if ($tp['ID'] == $so['item_id']) {
                $so['price'] = $tp['price'];
                $so['price'] /= 100;
                if($type == 1)
                    $ticheng += $tp['commission'] / 100;
                else if($type == 2)
                    $ticheng += $tp['commission2'] / 100;

                $yeji += $so['price'];
                array_push($key_info, [
                    "service_name" => $tp['name'],
                    "room_number" => $so['private_room_number'],
                    "bonus" => (int) $type==1?$tp['commission'] / 100:$tp['commission2'] / 100,
                    "time" => $one_consumed_order[0]['generated_time'],
                    "order_id" => $so['order_id'],
                    "income" => $so['price'],
                    "clock_type" => $so['clock_type'],
                ]);
            }
        }
    }
    if ($so['order_id'] != $last_soid) {
        array_push($consumed_order, $one_consumed_order[0]);
    }
    $last_soid = $so['order_id'];
}

echo json_encode((object) [
    'total_clock' => count($key_info),
    'bonus' => $ticheng,
    'total_income' => $yeji,
    'key_info' => $key_info,
    'type' => $type,
]);
