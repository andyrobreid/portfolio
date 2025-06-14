# Ensure this script is run at the top level of this repository

# Get the path for obsidian

obsidian_dir=$1
paths=$(find $obsidian_dir -name "*.md")
pwd=$(pwd)
echo $paths
for path in $paths
do
  destination=${path//$obsidian_dir/$pwd"/src/"}
  echo "$path -> $destination"
  cp $path $destination
  if [ $? -ne 0 ]; then
    echo "[FAIL] with $destination from $path"
  fi
done

# TODO count up errors and echo if none the echo success



