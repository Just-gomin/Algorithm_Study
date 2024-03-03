import 'dart:io';
import 'dart:convert';
import 'dart:async';

void main() async {
  final file = File('stdin');
  Stream<String> lines = file
      .openRead()
      .transform(utf8.decoder) // Decode bytes to UTF-8.
      .transform(LineSplitter()); // Convert stream to individual lines.
  try {
    await for (var line in lines) {
      print('$line');
    }
    print('File is now closed.');
  } catch (e) {
    print('Error: $e');
  }
}
