<?
$file_date = date("Ymd.His", filemtime("README.md"));

$cmd = "find ./| grep index.html";
$files = shell_exec($cmd);
$html_files = explode("\n", $files);

$cmd2 = "find _nuxt/*.js";
$js_files = shell_exec($cmd2);
$js_files = explode("\n", $js_files);
foreach($js_files as $file){
	if (is_file($file)){
		$cnt = file_get_contents($file);
		if (!preg_match("/\"\.js\"/", $cnt)){
			continue;
		}
		echo $file."\n";
		$cnt = preg_replace("/\"\.js\"/", "\".js?version={$file_date}\"", $cnt);
		//echo $cnt;
		file_put_contents($file, $cnt);
//		exit();
	}
}	

foreach($html_files as $file){
	if (is_file($file)){
		echo $file."\n";
		$cnt = file_get_contents($file);
		$cnt = preg_replace("/(src|href)=\"\/_nuxt\/([\w]+).js\"/", "$1=\"/_nuxt/$2.js?version={$file_date}\"", $cnt);
		//echo $cnt;
		file_put_contents($file, $cnt);
//		exit();
	}
}
?>

