#!/bin/bash
echo Hellow Word!

echo $1
echo -------------
echo $2

cp -r $1. $2/Solved

cd $2
git add .
git commit -m 'Added Solved Folder'
git push origin master