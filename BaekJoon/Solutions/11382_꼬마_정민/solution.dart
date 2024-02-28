/**
 * 문제: https://www.acmicpc.net/problem/11382
 *
 * - 입력: A, B, C (1 ≤ A, B, C ≤ 1012)이 공백을 사이에 두고 주어진다.
 * - 출력: A + B + C를 계산
 */

import 'dart:io';

void main() {
  List<int> arr = stdin.readLineSync()?.split(' ').map((e) => int.parse(e)).toList() as List<int>;
  stdout.write(arr.reduce((value, element) => value + element));
}
