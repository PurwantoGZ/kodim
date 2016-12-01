<?php 
/**
* Base class model
*/
class Base
{
	
	public $conn;

	public function __construct()
	{
		$this->conn = new mysqli("localhost","root","","koramil");
	}

	/*METHOD INSERT DATA*/
	public function insert($table, $rows = null) {
		$sql   = "INSERT INTO $table";
		$row   = null;
		$value = null;
		foreach ($rows as $key => $nilai) {
			$row .= ",".$key;
			$value .= ",'".$nilai."'";
		}
		$sql .= "(".substr($row, 1).")";
		$sql .= "VALUES(".substr($value, 1).")";

		$query=$this->conn->prepare($sql) or die($this->conn->error);
		if ($result =$query->execute()) {
			return true;
		} else {
			return false;
		}
	}

	/*METHOD FETCH(DISPLAY) DATA*/
	public function fetch($table,$where=null){
		$sql="SELECT * FROM $table";
		if ($where!=null) {
			$sql.=" WHERE $where";
		}
		$query=$this->conn->query($sql) or die($this->conn->error);
		return $query->fetch_all(MYSQL_BOTH);
	}

	/*METHOD UPDATE DATA*/
	public function update($table,$field=null,$where=null){
		$sql ="UPDATE $table SET ";
		$set=null;
		foreach ($field as $key => $values) {
			$set .=", ".$key." ='".$values."'";
		}
		$sql.=substr($set, 1)." WHERE $where";

		$query=$this->conn->prepare($sql) or die($this->conn->error);
		if ($result =$query->execute()) {
			return true;
		} else {
			return false;
		}
	}

	/*METHOD DELETE DATA*/
	public function delete($table, $where) {
		$sql = "DELETE FROM $table WHERE $where";
		$this->conn->query($sql);
		if ($result = $this->conn->query($sql)) {
			return true;
		} else {
			return false;
		}
	}

	/*DESCTRUCT METHOD*/
	public function __destruct()
	{
		$this->conn->close();
	}
}
 ?>